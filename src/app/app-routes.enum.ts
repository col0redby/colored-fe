export enum AppRoutes {
  uploadImage = '/api/v1/images/upload',
  getAccessLevels = 'api/v1/images/access-levels',
  getGenres = 'api/v1/genres',
  actionWithImages = '/api/v1/images',
  likePhoto = '/api/v1/images/like',
  unlikePhoto = '/api/v1/images/unlike',
  sendComment = '/api/v1/images/{id}/comments'
}
