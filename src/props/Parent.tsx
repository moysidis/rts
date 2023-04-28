import { ChildAsFC } from './Child';

const Parent = () => {
  return ( 
    <ChildAsFC color="red" onClick={()=> console.log("Clicked")}>
      aasdfasfd
    </ChildAsFC>
  )
}

export default Parent;