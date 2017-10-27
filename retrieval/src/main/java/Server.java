import java.net.URI;
import java.nio.file.Paths;
import java.sql.*;

import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import org.apache.commons.io.FileUtils;
import org.glassfish.jersey.jdkhttp.JdkHttpServerFactory;
import org.glassfish.jersey.server.ResourceConfig;
import org.json.JSONObject;

import com.sun.net.httpserver.HttpServer;

public class Server {
    @Path("/")
    public static class HelloWorldResource { // Must be public

        @GET
        @Path("")
        @Produces("application/json")
        public Response getAccount(@QueryParam("text") String text) throws Exception {
            try {
                System.out.println("begin program: " + text);
                String contents = FileUtils.readFileToString(Paths.get("/Users/Justin/Documents/github_repos/infinite_tabs/urls.txt").toFile());
                JSONObject object = new JSONObject();
                object.put("foo", contents);
                return Response.status(200).header("Access-control-allow-origin", "*").entity(object.toString()).build();
            } catch (Exception e) {
                e.printStackTrace();
                System.out.println(e.getStackTrace());
                return Response.serverError().header("Access-Control-Allow-Origin", "*")
                        .entity(e.getStackTrace())
                        .type("application/text").build();
            }
        }
    }

    public static void main(String[] args) throws Exception {
        HttpServer server = JdkHttpServerFactory.createHttpServer(
                new URI("http://localhost:9098/"), new ResourceConfig(HelloWorldResource.class));
    }

}
