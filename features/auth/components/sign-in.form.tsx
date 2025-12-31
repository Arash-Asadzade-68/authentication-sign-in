'use client';

import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import SocialLoginMethods from './social-login-methods';
import DividerWithText from '@/components/divider-with-text';
import SignInFormFooter from './sign-in-form-footer';
import { useTranslations } from 'next-intl';

export function SignInForm() {
  const router = useRouter();
  const t = useTranslations();

  const form = useForm();

  const isPending = form.formState.isSubmitting;

  return (
    <Card className="max-w-[440px]">
      <CardHeader className="text-center mb-8 px-0">
        <CardTitle className="text-2xl font-bold">{t('signIn.title')}</CardTitle>
        <CardDescription className="text-sm text-(--text-secondary)">{t('signIn.subtitle')}</CardDescription>
      </CardHeader>
      <CardContent className="px-0">
        <Form {...form}>
          <form className="grid gap-4">
            <SocialLoginMethods isPending={isPending} />
            <DividerWithText text={t('signIn.orContinueWith')} />
            <div className="grid gap-6">
              <Tabs defaultValue="email">
                <div className="items-center w-full justify-center flex">
                  <TabsList className="bg-(--bg-secondary) p-1 rounded-full border border-(--border-color)">
                    <TabsTrigger
                      value="email"
                      className="px-6 py-2 rounded-full text-(--text-secondary) text-[13px] transition-all duration-200 data-[state=active]:border-(--bg-primary) data-[state=active]:text-(--text-primary) data-[state=active]:shadow-[0 2px 8px rgba(0,0,0,0.05)] data-[state=active]:font-semibold"
                    >
                      {t('signIn.email')}
                    </TabsTrigger>
                    <TabsTrigger
                      value="phone"
                      className="px-6 py-2 rounded-full text-(--text-secondary) text-[13px] transition-all duration-200 data-[state=active]:border-(--bg-primary) data-[state=active]:text-(--text-primary) data-[state=active]:shadow-[0 2px 8px rgba(0,0,0,0.05)] data-[state=active]:font-semibold"
                    >
                      {t('signIn.phone')}
                    </TabsTrigger>
                  </TabsList>
                </div>
                <TabsContent value="email">
                  <FormField
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="block text-xs font-medium ml-1 mr-1 text-(--text-secondary)">
                          {t('forms.labels.email')}
                        </FormLabel>
                        <FormControl>
                          <Input type="email" placeholder="m@example.com" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </TabsContent>
                <TabsContent value="phone">
                  <FormField
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="block text-xs font-medium ml-1 mr-1 text-(--text-secondary)">
                          {t('forms.labels.phone')}
                        </FormLabel>
                        <div className="relative">
                          <FormControl>
                            <Input placeholder="912 345 6789" {...field} />
                          </FormControl>
                          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-xs bg-secondary px-2 py-1 rounded border border-border rtl:right-auto rtl:left-3 ltr:left-auto ltr:right-3">
                            +98
                          </span>
                        </div>

                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </TabsContent>
              </Tabs>

              <div>
                <Button type="submit" className="justify-center items-center" disabled={isPending}>
                  <span>{t('buttons.continue')}</span>
                  <i className="ph ph-arrow-left rtl:rotate-0 ltr:rotate-180" />
                </Button>
                <Button variant={'ghost'} disabled={isPending} type="button" className="mt-2">
                  {t('buttons.continueAsGuest')}
                </Button>
              </div>
            </div>
            <SignInFormFooter />
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
