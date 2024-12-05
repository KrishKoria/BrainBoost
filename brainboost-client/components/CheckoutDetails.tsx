import { useCurrentCourse } from "@/hooks/useCurrentCourse";
import { useSearchParams } from "next/navigation";
import React from "react";
import Loading from "./Loading";
import CoursePreview from "./CoursePreview";

const CheckoutDetails = () => {
  const { course: selectedCourse, isLoading, isError } = useCurrentCourse();
  const searchParams = useSearchParams();
  const showSignup = searchParams.get("showSignUp") === "true";
  if (isLoading) return <Loading />;
  if (isError) return <div>Something Went Wrong!</div>;
  if (!selectedCourse) return <div className="">Course not Found</div>;
  return (
    <div className="checkout-details">
      <div className="checkout-details__container">
        <div className="checkout-details__preview">
          <CoursePreview course={selectedCourse} />
        </div>
      </div>
    </div>
  );
};

export default CheckoutDetails;
