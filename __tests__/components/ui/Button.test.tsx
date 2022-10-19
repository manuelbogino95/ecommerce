import { Button } from 'components/ui';
import { render, screen } from 'lib/test-utils';

describe(Button, () => {
  it('should render a button', () => {
    render(<Button>Button</Button>);

    const button = screen.getByRole('button', { name: /Button/ });

    expect(button).toBeVisible();
  });
});
