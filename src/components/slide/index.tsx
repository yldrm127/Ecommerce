import Carousel from 'react-material-ui-carousel'
export function Slide()
{
    var items = [
        {   
            img:"https://www.searchenginejournal.com/wp-content/uploads/2022/08/google-shopping-ads-6304dccb7a49e-sej.png"
        },
        {
            img:"https://www.searchenginejournal.com/wp-content/uploads/2022/08/google-shopping-ads-6304dccb7a49e-sej.png"
     
        }
    ]

    return (
        <Carousel className=' m-6'>
            {
                items.map( (item, i) => <Item key={i} item={item} /> )
            }
        </Carousel>
    )
}

function Item(props:any)
{
    return (
       <img src={props.item.img} />
    )
}