import CardComponent from "./CardComponent";

export default function ProductListComponent({greeting}) {
    return (
        <>
            <div style={{height:'90vh'}}>
                <h1 style={{marginBottom:65}}>{greeting}</h1>

                <div style={{display:'flex', justifyContent:'space-evenly', flexWrap:'wrap'}}>
                    <CardComponent source={"https://www.shutterstock.com/image-photo/office-home-wood-furniture-background-260nw-1908704260.jpg"} name={"Mesa ratona"} price={34000}/>
                    <CardComponent source={"https://www.shutterstock.com/image-photo/modern-sofa-on-white-background-260nw-2003672078.jpg"} name={"Sofa gris oscuro"} price={220000}/>
                    <CardComponent source={"https://www.shutterstock.com/image-photo/3-seat-beige-leather-color-260nw-2103667781.jpg"} name={"Sofa beige"} price={200000}/>
                    <CardComponent source={"https://i.pinimg.com/550x/90/db/24/90db24cf22efdfc65e6dff5261e28268.jpg"} name={"Mesa de luz madera"} price={28000}/>
                </div>
            </div>
        </>
    )
}
