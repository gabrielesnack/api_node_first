interface IRepository<Entity> {

    // Find a list of resources
    find(params: any) : any;
    // Get a single resource by its id
    get(id: number) : any;
    // Create a new resource
    create(entity: Entity) : any;
    // Replace an existing resource by its id with data
    update(entity: Entity) : any;
    // Remove a resource by its id
    delete(entity: Entity) : any;

}

export default IRepository;