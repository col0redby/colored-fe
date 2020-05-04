export class HttpPathBuilder {

  static buildUrlWithPathVariables(url: string, params: Map<string, string | number | boolean>) {
    let newUrl = url;
    params.forEach((value, key) => {
      newUrl = newUrl.replace('{' + key + '}', value.toString());
    });
    return newUrl;
  }
}
