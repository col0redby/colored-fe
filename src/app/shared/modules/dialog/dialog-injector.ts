import {InjectFlags, InjectionToken, Injector, Type} from '@angular/core';

export class DialogInjector implements Injector {
  constructor(public parentInjector: Injector,
              public additionalTokens: WeakMap<any, any>) {
  }

  get<T>(token: Type<T> | InjectionToken<T>, notFoundValue?: T, flags?: InjectFlags): T;
  get(token: any, notFoundValue?: any): any;
  get(token, notFoundValue?, flags?: InjectFlags): any {
    const value = this.additionalTokens.get(token);
    return value ? value : this.parentInjector.get(token);
  }
}
