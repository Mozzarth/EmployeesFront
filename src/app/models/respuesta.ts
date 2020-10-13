export interface IResp<T> {
    status: number;
    data: T;
    ok: boolean;
    url: string;
}

