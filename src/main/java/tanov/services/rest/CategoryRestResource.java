package tanov.services.rest;

import java.net.URI;
import java.util.Collection;
 
import javax.ejb.Stateless;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.TypedQuery;
import javax.ws.rs.BadRequestException;
import javax.ws.rs.Consumes;
import javax.ws.rs.DELETE;
import javax.ws.rs.GET;
import javax.ws.rs.NotFoundException;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import javax.ws.rs.core.Response.ResponseBuilder;
import javax.ws.rs.core.UriInfo;
 
import tanov.entities.Category;

@Path("/category")
@Produces ({MediaType.APPLICATION_JSON, MediaType.APPLICATION_XML})
@Consumes ({MediaType.APPLICATION_JSON, MediaType.APPLICATION_XML})
@Stateless
public class CategoryRestResource {
    //the PersistenceContext annotation is a shortcut that hides the fact
    //that, an entity manager is always obtained from an EntityManagerFactory.
    //The peristitence.xml file defines persistence units which is supplied by name
    //to the EntityManagerFactory, thus  dictating settings and classes used by the
    //entity manager
    @PersistenceContext(unitName = "testPU")
    private EntityManager em;
 
    //Inject UriInfo to build the uri used in the POST response
    @Context
    private UriInfo uriInfo;
 
    @POST
    public Response createCategory(Category category){
        if(category == null){
            throw new BadRequestException();
        }
        em.persist(category);
 
        //Build a uri with the Item id appended to the absolute path
        //This is so the client gets the Item id and also has the path to the resource created
        URI categoryUri = uriInfo.getAbsolutePathBuilder().path(category.getId()).build();
 
        //The created response will not have a body. The itemUri will be in the Header
        return Response.created(categoryUri).build();
    }
 
    @GET
    @Path("{id}")
    @Produces({ MediaType.APPLICATION_JSON, MediaType.APPLICATION_XML })
    public Response getCategory(@PathParam("id") String id){
    	Category category = em.find(Category.class, id);
 
        if(category == null){
            throw new NotFoundException();
        }
 
        return Response.ok(category)
        		.header("Access-Control-Allow-Origin", "*")
				.header("Access-Control-Allow-Methods", "GET, POST, DELETE, PUT").build();
    }
 
    //Response.ok() does not accept collections
    //But we return a collection and JAX-RS will generate header 200 OK and
    //will handle converting the collection to xml or json as the body
    @GET
    public Collection<Category> getCategorys(){
        TypedQuery<Category> query = em.createNamedQuery("Category.findAll", Category.class);
        return query.getResultList();
    }
 
    @PUT
    @Path("{id}")
    public Response updateCategory(Category category, @PathParam("id") String id){
        if(id == null){
            throw new BadRequestException();
        }
 
        //Ideally we should check the id is a valid UUID. Not implementing for now
        category.setId(id);
        em.merge(category);
 
        return Response.ok().build();
    }
 
    @DELETE
    @Path("{id}")
    public Response deleteCategory(@PathParam("id") String id){
        Category category = em.find(Category.class, id);
        if(category == null){
            throw new NotFoundException();
        }
        em.remove(category);
        return Response.noContent().build();
    }
 
}
