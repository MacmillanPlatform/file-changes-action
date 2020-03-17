import type { EndpointOptions, RequestOptions, OctokitResponse } from '@octokit/types'
// define interface
export interface OctokitMock {
  paginate: (
    data: EndpointOptions, 
    cb?: ((response: OctokitResponse<any>) => Promise<any[]>)) => Promise<any[]>
  pulls: {
    listFiles: {
      (data: EndpointOptions): Promise<OctokitResponse<any>>
      endpoint: {
        merge: (data: EndpointOptions) => RequestOptions
      }
    }
  }
  repos: {
    compareCommits: {
      (data: EndpointOptions): Promise<OctokitResponse<any>>
      endpoint: {
        merge: (data: EndpointOptions) => RequestOptions
      }
    }
  }
}