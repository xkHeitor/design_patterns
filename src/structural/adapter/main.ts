import ExpressHttp from './ExpressHttp';
import HapiHttp from "./HapiHttp";
import Http from './Http';

function init(http: Http, port: number) {
    http.route("get", "/books", (params: any, body: any) => {
        const books = [
            { title: "abstract factory" },
            { title: "adapter" },
            { title: "strategy" },
        ];
        return books;
    });
    
    http.listen(port);
    console.info(`Port ${port} on`);
}

init(new HapiHttp(), 3002);