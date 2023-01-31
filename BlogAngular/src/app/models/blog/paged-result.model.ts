export class PagedResult<T>{
    constructor(
        public items: Array<T>,
        public startDate: boolean = false,
        public num: number = 0
    ){}
}