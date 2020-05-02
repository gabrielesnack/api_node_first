interface BaseService {

    // Find a list of resources
    find(params: any) : any;
    // Get a single resource by its id
    get(id: number) : any;
    // Create a new resource
    create(data: any) : any;
    // Replace an existing resource by its id with data
    update(id: number, data: any) : any;
    // Merge new data into a resource
    patch(id: number, data: any) : any;
    // Remove a resource by its id
    delete(id: number) : any;

}