export interface ISearchable {
    search(searchArguments: string): ISearchable[] | null;
}