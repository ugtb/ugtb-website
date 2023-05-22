import clsx from 'clsx';
import { createPortal } from 'preact/compat';
import { useEffect, useState } from 'preact/hooks';
import { navLinks } from '~/lib/constants';
import Icon from './common/Icon';

interface MobileMenuProps {
  class?: string;
  variant: 'dark' | 'light';
  currentUrl: string;
}

export default function MobileMenu({
  class: className,
  variant,
  currentUrl,
}: MobileMenuProps) {
  const [isOpened, setIsOpened] = useState(false);

  useEffect(() => {
    if (isOpened) {
      document.body.classList.add('overflow-y-hidden', 'h-full');
    } else {
      document.body.classList.remove('overflow-y-hidden', 'h-full');
    }
  }, [isOpened]);

  return (
    <div class={className}>
      <button
        class={clsx(
          'relative z-20 block h-8 w-8 before:absolute before:inset-x-0 before:top-1/2 before:block before:h-0.5 before:bg-current before:transition-transform after:absolute after:inset-x-0 after:top-1/2 after:block after:h-0.5  after:bg-current after:transition-transform ',
          {
            'before:translate-y-1 after:-translate-y-1': !isOpened,
            'before:translate-y-0 before:rotate-45 after:translate-y-0 after:-rotate-45':
              isOpened,
          }
        )}
        aria-label="Відкрити/закрити головне меню"
        onClick={() => setIsOpened(prev => !prev)}
      />

      {createPortal(
        <nav
          class={clsx(
            'fixed inset-x-0 top-0 z-30 flex h-screen flex-col overflow-y-auto pb-32 pt-48 transition sm:pb-40 sm:pt-60',
            {
              'bg-neutral-dark text-white': variant === 'dark',
              'bg-neutral-soft text-neutral-dark': variant === 'light',
              '-translate-x-full opacity-0': !isOpened,
              'translate-x-0 opacity-100': isOpened,
            }
          )}
        >
          <ul class="max-w-[1440px] space-y-3 px-6 md:px-20">
            {navLinks.map(({ text, href }) => (
              <li>
                <a class="group flex items-center gap-4 py-1" href={href}>
                  {href === currentUrl && (
                    <span class="text-brand">
                      <Icon name="next" size={32} />
                    </span>
                  )}
                  <span
                    class={clsx(
                      'text-H3-mobile sm:text-H3-desktop',
                      href === currentUrl
                        ? variant === 'dark'
                          ? 'text-current'
                          : 'text-brand'
                        : 'text-neutral transition group-hover:translate-x-[48px] group-hover:text-current'
                    )}
                  >
                    {text}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </nav>,
        document.body
      )}
    </div>
  );
}
