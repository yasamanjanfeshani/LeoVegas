import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import Layout from './index'
import '@testing-library/jest-dom'

describe('Layout component', () => {
    test('renders header and children', () => {
        const testChild = <div>Test child content</div>
        render(
            <BrowserRouter>
                <Layout>{testChild}</Layout>
            </BrowserRouter>
        )

        // Test that the header is rendered
        const header = screen.getByTestId('header')
        expect(header).toBeInTheDocument()

        // Test that the child content is rendered
        const childContent = screen.getByText(/Test child content/i)
        expect(childContent).toBeInTheDocument()
    })
})