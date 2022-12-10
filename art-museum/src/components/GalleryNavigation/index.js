import {NavLink} from 'react-router-dom';

export const GalleryNavigation=({galleries})=>{


    //console.log(galleries)
    return(
        <nav>  
        {galleries.map((gallery, idx)=>{ 
        return(<NavLink to={`/galleries/${gallery.id}`} key={idx}> {gallery.name}</NavLink>
    )}
    </nav>
    )
}

                        //<NavLink to="/">gallery.name</NavLink>


//props.galleries.map()=>{
    //    <li> </li>
    //}    