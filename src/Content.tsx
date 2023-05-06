
import { CoursePart } from './types';


type Props = { 
  parts: CoursePart[]
}

const Content = ({parts}: Props) => {
       
        let details = " "

        parts.forEach(part => {
             
          switch(part.kind) {

           case "basic":
             details = part.description
              break;
           case "background":
             details =part.backroundMaterial;
             break;
         
           case "group" :
            return 0;
           case "special":
            return -1;
            default:
              return -1;

        }
      })

      return(<li>{details}</li>)
      
};

export default Content;