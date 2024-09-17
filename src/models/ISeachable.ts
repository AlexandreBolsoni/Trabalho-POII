interface ISearchable {
    search(searchArguments: string): ISearchable[] | undefined;
}

export default ISearchable;