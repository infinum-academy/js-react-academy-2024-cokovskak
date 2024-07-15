import { IShow } from "@/typings/show"
import { ShowList } from "./ShowList"
import { render,screen } from "@testing-library/react"

describe('ShowList',()=>{

    const mockList:IShow[]=[{
        "id":"200",
        "average_rating": 2,
        "description": "Nine noble families wage war against each other in order to gain control over the mythical land of Westeros.",
        "title": "Game of thrones",
        "image_url":"https://picsum.photos/400/600?random=1",
        "no_of_reviews": 4
    },
    {
        "id":"201",
        "average_rating": 3,
        "description": "Nine noble families wage war against each other in order to gain control over the mythical land of Westeros.",
        "title": "House of dragon",
        "image_url":"https://picsum.photos/400/600?random=2",
        "no_of_reviews": 4
    }
]
it("check if all provided shows are rendered",()=>{
    render(<ShowList showList={mockList}/>);
    const shows = screen.getByTestId('list');
    expect(shows).toBeInTheDocument();
    expect(shows.children.length).toEqual(mockList.length);
});

})