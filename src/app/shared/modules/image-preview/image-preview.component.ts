import {
  ApplicationRef,
  Component,
  ComponentFactoryResolver,
  EmbeddedViewRef,
  Injector,
  OnInit,
  TemplateRef,
  ViewChild
} from '@angular/core';
import {ActivatedRoute, Router, UrlSegment} from '@angular/router';

import {filter} from 'rxjs/operators';
import {interval, Observable, Subscription} from 'rxjs';
import {select, Store} from '@ngrx/store';

import * as fromCommonCore from '../../../core/store';
import {Image} from '../../models/image.model';
import {LikeAction} from '../../models/like-action.model';
import {FullScreenComponent} from '../full-screen/full-screen.component';

@Component({
  selector: 'colored-image-preview',
  templateUrl: './image-preview.component.html'
})
export class ImagePreviewComponent implements OnInit {

  private image$: Observable<Image>;
  private currentImageId: number;
  private routeSubscription: Subscription;

  @ViewChild('fullScreenTemplate', {static: false})
  private fullScreenCTemplate: TemplateRef<any>;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private store$: Store<fromCommonCore.GeneralCoreState>,
              private componentFactoryResolver: ComponentFactoryResolver,
              private applicationRef: ApplicationRef,
              private injector: Injector) {
  }

  ngOnInit() {
    this.currentImageId = parseInt(this.route.snapshot.paramMap.get('id'), 10);

    this.image$ = this.store$.pipe(
      select(fromCommonCore.getSelectedImage),
      filter(image => !!image)
    );
  }

  editImage($event: any) {
    if ($event.value) {
      this.store$.dispatch(fromCommonCore.updateCurrentImageRequest({id: this.currentImageId, updatingField: $event}));
    }
  }

  close() {
    this.routeSubscription = this.route.data.subscribe(data => {
      const rootRoute = data.rootSegment;
      if (rootRoute && rootRoute instanceof UrlSegment) {
        this.router.navigateByUrl(rootRoute.path);
      }
    });
    this.routeSubscription.unsubscribe();
  }

  deletePhoto() {
    this.store$.dispatch(fromCommonCore.deleteCurrentImageRequest({id: this.currentImageId}));
  }

  getMinimalSize(image: Image) {
    return image.lg || image.original;
  }

  likePhoto($event) {
    const like: LikeAction = {userId: 1, imageId: $event};
    this.store$.dispatch(fromCommonCore.likeImageRequest({like}));
  }

  unlikePhoto($event) {
    const like: LikeAction = {userId: 1, imageId: $event};
    this.store$.dispatch(fromCommonCore.likeImageRequest({like}));
  }

  sendComment($event: any) {
    this.store$.dispatch(fromCommonCore.sendCommentRequest({id: this.currentImageId, comment: $event}));
  }

  openFullScreenPhoto(image: Image) {
    const componentRef = this.componentFactoryResolver
      .resolveComponentFactory(FullScreenComponent)
      .create(this.injector);

    componentRef.instance.imagePath = image.original;
    componentRef.instance.exitFullScreenMode.subscribe(() => {
      this.applicationRef.detachView(componentRef.hostView);
      componentRef.destroy();
    });

    this.applicationRef.attachView(componentRef.hostView);
    const domElem = (componentRef.hostView as EmbeddedViewRef<any>).rootNodes[0] as HTMLElement;
    document.body.appendChild(domElem);
  }
}
