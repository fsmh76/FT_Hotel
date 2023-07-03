export class Hotel{
   
    HotelID: string;
    IsReady: string;
    HotelsName: string;
    Location: string;
    LowestPrice: string;
    Currency: string;
    HotelRating: string;

    constructor ( HotelID: string ,IsReady: string , HotelsName: string,
        Location: string, LowestPrice: string, Currency: string, HotelRating: string ){
            this.HotelID=HotelID;
            this.IsReady=IsReady;
            this.HotelsName=HotelsName;
            this.Location=Location;
            this.LowestPrice=LowestPrice;
            this.Currency=Currency;
            this.HotelRating=HotelRating;

        }

}
