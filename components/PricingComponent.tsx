import { Button } from "@/components/ui/button";

export function PricingComponent() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
              Pricing
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Straightforward pricing. No surprises.
            </h2>
            <p className="max-w-[800px] text-gray-500 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Choose the plan that's right for your team. All plans include
              unlimited projects and bandwidth, built-in CI/CD, and automated
              deployments.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-sm items-start gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3">
          <div className="flex flex-col space-y-2">
            <div className="grid gap-1">
              <h3 className="text-xl font-bold">Starter</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                For individuals and hobbyists getting started with frontend
                projects.
              </p>
            </div>
            <div className="grid gap-1">
              <h3 className="text-xl font-bold">$19/mo</h3>
            </div>
            <ul className="grid gap-2">
              <li>
                <CheckIcon className="mr-2 inline-block h-4 w-4" />
                Unlimited team members
              </li>
              <li>
                <CheckIcon className="mr-2 inline-block h-4 w-4" />1 concurrent
                build
              </li>
              <li>
                <CheckIcon className="mr-2 inline-block h-4 w-4" />
                100 GB bandwidth per month
              </li>
            </ul>
            <Button size="sm" variant="outline">
              Contact Sales
            </Button>
          </div>
          <div className="flex flex-col space-y-2">
            <div className="grid gap-1">
              <h3 className="text-xl font-bold">Pro</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                For frontend teams shipping modern web apps and sites.
              </p>
            </div>
            <div className="grid gap-1">
              <h3 className="text-xl font-bold">$99/mo</h3>
            </div>
            <ul className="grid gap-2">
              <li>
                <CheckIcon className="mr-2 inline-block h-4 w-4" />
                Unlimited team members
              </li>
              <li>
                <CheckIcon className="mr-2 inline-block h-4 w-4" />2 concurrent
                builds
              </li>
              <li>
                <CheckIcon className="mr-2 inline-block h-4 w-4" />
                500 GB bandwidth per month
              </li>
            </ul>
            <Button size="sm">Choose Pro</Button>
          </div>
          <div className="flex flex-col space-y-2">
            <div className="grid gap-1">
              <h3 className="text-xl font-bold">Enterprise</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                For organizations with advanced automation and scale needs.
              </p>
            </div>
            <div className="grid gap-1">
              <h3 className="text-xl font-bold">$249/mo</h3>
            </div>
            <ul className="grid gap-2">
              <li>
                <CheckIcon className="mr-2 inline-block h-4 w-4" />
                Unlimited team members
              </li>
              <li>
                <CheckIcon className="mr-2 inline-block h-4 w-4" />5 concurrent
                builds
              </li>
              <li>
                <CheckIcon className="mr-2 inline-block h-4 w-4" />1 TB
                bandwidth per month
              </li>
            </ul>
            <Button size="sm" variant="outline">
              Contact Sales
            </Button>
          </div>
        </div>
        <div className="mx-auto grid max-w-3xl gap-8 lg:grid-cols-2 lg:gap-12 xl:max-w-5xl">
          <div className="space-y-2">
            <h3 className="text-2xl font-bold">Can I change my plan later?</h3>
            <p className="text-gray-500 dark:text-gray-400">
              Yes, you can upgrade or downgrade your plan at any time. If you
              choose to upgrade, you will be charged a pro-rated amount for the
              remainder of your billing cycle.
            </p>
          </div>
          <div className="space-y-2">
            <h3 className="text-2xl font-bold">
              Are there any limits on the number of team members?
            </h3>
            <p className="text-gray-500 dark:text-gray-400">
              No, all plans include unlimited team members. You can invite as
              many collaborators as you need to your projects.
            </p>
          </div>
          <div className="space-y-2">
            <h3 className="text-2xl font-bold">
              What types of payment do you accept?
            </h3>
            <p className="text-gray-500 dark:text-gray-400">
              We accept payment via credit card (Visa, MasterCard, and American
              Express). For Enterprise plans, we can issue an invoice payable by
              bank transfer or check.
            </p>
          </div>
          <div className="space-y-2">
            <h3 className="text-2xl font-bold">
              Can I try the platform before I buy a plan?
            </h3>
            <p className="text-gray-500 dark:text-gray-400">
              Yes, we offer a 14-day free trial of the Pro plan. You can sign up
              for the trial without providing your credit card information.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function CheckIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}
