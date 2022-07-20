import { render, screen } from "@testing-library/react" 
import { GifCard } from "../../src/components/GifCard"

describe('<GifCard/>', () => {

  const title = "Dragon Ball"
  const image = "https://test.com/dragonball.jpg"
  
  test('debe hacer match con el snapshot', () => {
    const { container } = render(<GifCard title={title} image={image}/>)
    expect( container ).toBeInTheDocument;
  })

  test('debe mostrar la imagen con el URL y el ALT indicado', () => {
    render(<GifCard title={title} image={image}/>)
    // screen.debug()
    // expect( screen.getByRole('img').src ).toBe(image)
    const { src, alt} = screen.getByRole('img')
    expect(src).toBe(image)
    expect(alt).toBe(title)
  })

  test('debe de mostrar el titulo del componente', () => {
    render(<GifCard title={title} image={image} />)
    expect( screen.getByText(title) ).toBeTruthy();
  })
})