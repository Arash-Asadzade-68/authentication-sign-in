import { Button } from '@/components/ui/button';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { useTranslations } from 'next-intl';

type SocialLoginMethodsProps = {
  isPending: boolean;
};

export default function SocialLoginMethods({ isPending }: SocialLoginMethodsProps) {
  const t = useTranslations();

  return (
    <div className="grid gap-6">
      <div className="flex flex-col space-y-3">
        <Button
          variant={'outline'}
          className="w-full justify-center gap-2 font-medium"
          type="button"
          disabled={isPending}
        >
          <i className="ph ph-google-logo text-lg" />
          <span>{t('buttons.continueWithGoogle')}</span>
        </Button>
        <div className="grid grid-cols-3 gap-3">
          <Button variant={'outline'} type="button" disabled={isPending}>
            <i className="ph ph-apple-logo text-xl" />
          </Button>
          <Button variant={'outline'} type="button" disabled={isPending}>
            <i className="ph ph-linkedin-logo text-xl" />
          </Button>
          <Button variant={'outline'} type="button" disabled={isPending}>
            <i className="ph ph-x-logo text-xl" />
          </Button>
        </div>

        <Collapsible className="text-center">
          <CollapsibleTrigger className="text-xs text-(--text-secondary) hover:text-(--text-primary) transition underline decoration-dotted">
            {t('keyTerms.moreOptions')}
          </CollapsibleTrigger>
          <CollapsibleContent className={'grid grid-cols-5 gap-2 mt-3'}>
            <div className="text-[10px] max-sm:text-[8px] border border-(--border-color) p-1.5 text-center cursor-pointer text-(--text-secondary) transition-all duration-200 rounded-[6px] hover:border-(--text-primary) hover:text-(--text-primary)">
              Microsoft
            </div>
            <div className="text-[10px] max-sm:text-[8px] border border-(--border-color) p-1.5 text-center cursor-pointer text-(--text-secondary) transition-all duration-200 rounded-[6px] hover:border-(--text-primary) hover:text-(--text-primary)">
              Facebook
            </div>
            <div className="text-[10px] max-sm:text-[8px] border border-(--border-color) p-1.5 text-center cursor-pointer text-(--text-secondary) transition-all duration-200 rounded-[6px] hover:border-(--text-primary) hover:text-(--text-primary)">
              Github
            </div>
            <div className="text-[10px] max-sm:text-[8px] border border-(--border-color) p-1.5 text-center cursor-pointer text-(--text-secondary) transition-all duration-200 rounded-[6px] hover:border-(--text-primary) hover:text-(--text-primary)">
              Gitlab
            </div>
            <div className="text-[10px] max-sm:text-[8px] border border-(--border-color) p-1.5 text-center cursor-pointer text-(--text-secondary) transition-all duration-200 rounded-[6px] hover:border-(--text-primary) hover:text-(--text-primary)">
              Discord
            </div>
          </CollapsibleContent>
        </Collapsible>
      </div>
    </div>
  );
}
