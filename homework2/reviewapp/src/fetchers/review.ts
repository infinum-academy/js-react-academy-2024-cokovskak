import { IReview } from "@/typings/review";
import { authFetcher } from "./fetcher";

export async function createReview(url : string, { arg }: { arg: IReview }){
    return authFetcher<IReview>(url,{
      method:'POST',
      body:JSON.stringify(arg)
    });

  }
  export async function deleteReview(url:string)
  {
    return authFetcher(url,{
      method: 'DELETE'
    });
  }