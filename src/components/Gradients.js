import GradientsList from "./GradientsList"
import GradientsSelect from "./GradientsSelect"

const Gradients = ({gradientList, loading}) => {
  

  return (
    <>
      <GradientsSelect/>
      <GradientsList gradientList={gradientList} loading={loading}/>
    </>
  )
}

export default Gradients
