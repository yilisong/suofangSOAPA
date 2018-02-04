import { SourceInterceptor } from './'

export default {
  queryList: params =>
    SourceInterceptor.get('/v1.0/assets', {
      params
    })
}
