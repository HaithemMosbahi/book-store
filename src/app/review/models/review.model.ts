
/**
 * The mode is a simple typescript interface that defines the contract of the post entity
 * 
 * @export
 * @interface Post
 */

export interface Review {
    pushKey?: string;
    loading?: boolean;
    text:string;
    votes?:number;
    date:string;
    upVote:number;
    downVote:number;
    user?:string;
    error?:string;
}