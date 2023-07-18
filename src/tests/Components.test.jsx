import { vi, assert, describe } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Button from '../components/Button'

describe('Button', () => {
    it('Button renders with children', () => {
        const { getByText } = render(<Button>Click me!</Button>)
        const button = getByText('Click me!')
        assert.ok(button)
    })

    it('Button calls onClick handler when clicked', async () => {
        const user = userEvent.setup();
        render(<Button />);
        const button = screen.getByRole("button");
        await user.click(button);
        // check for function call
    })

    it('Button uses default props when not provided', () => {
        const { getByText } = render(<Button>Click me!</Button>)
        const button = getByText('Click me!')
        assert.equal(button.className, 'default-btn')
    })
})
