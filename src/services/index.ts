import Axios, { AxiosInstance, AxiosResponse } from 'axios';
import { bangoURL } from '../constants';
import { GetResponseType } from '../interfaces';

class bangoAPI {
  private readonly _instance: AxiosInstance;
  constructor() {
    this._instance = Axios.create();
    this._initializeResponseInterceptor();
  }

  private _initializeResponseInterceptor = () => {
    this._instance.interceptors.response.use(
      this._handleResponse,
      this._handleError
    );
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  protected _handleResponse = ({ data }: AxiosResponse<any>) => data;

  protected _handleError = (error: unknown) => error;

  public getRecipes = (page: string): Promise<GetResponseType> =>
    this._instance.get(`${bangoURL}/newest/1/${page}`);

  public getDetailPage = (pageURL: string): Promise<string> =>
    this._instance.get(pageURL);
}

export default new bangoAPI();
