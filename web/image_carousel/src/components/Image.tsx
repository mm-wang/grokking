const Image = ({src}: {src: string}) => {
  return (
    <img className='image' src={src} width={400} height={400} alt="Showing something new" />
  )
}

export default Image;
