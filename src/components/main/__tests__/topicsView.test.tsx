import '@testing-library/jest-dom/extend-expect'
import { render, screen } from '@testing-library/react'
import TopicsView from '../TopicsView'

it('Render topics view', () => {
  render(<TopicsView />)
  const topicsScreen = screen.getByRole('topicsView')
  expect(topicsScreen).toBeInTheDocument()
})

