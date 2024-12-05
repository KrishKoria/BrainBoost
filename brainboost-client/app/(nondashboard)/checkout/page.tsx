"use client";
import CheckoutDetails from "@/components/CheckoutDetails";
import Completion from "@/components/Completion";
import Loading from "@/components/Loading";
import Payment from "@/components/Payment";
import WizardStepper from "@/components/wizardStepper";
import { useCheckoutNavigation } from "@/hooks/useCheckoutNavigation";
import { useUser } from "@clerk/nextjs";
import React from "react";

const CheckoutWizard = () => {
  const { isLoaded } = useUser();
  const { checkoutStep } = useCheckoutNavigation();

  if (!isLoaded) return <Loading />;

  const renderStep = () => {
    switch (checkoutStep) {
      case 1:
        return <CheckoutDetails />;
      case 2:
        return <Payment />;
      case 3:
        return <Completion />;
      default:
        return <CheckoutDetails />;
    }
  };

  return (
    <div className="checkout">
      <WizardStepper currentStep={checkoutStep} />
      <div className="checkout__content">{renderStep()}</div>
    </div>
  );
};

export default CheckoutWizard;
