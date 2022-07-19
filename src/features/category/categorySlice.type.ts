
export type CategoryType = {
    id : string ;
    categoryName : string ;
    image : {
        altText : string ;
        srcURL : string ;
    }
    description : string ;
};

export type CategoryInitialState ={
    categories : Array<CategoryType> | [] ;
    categoryLoader : boolean ;
}