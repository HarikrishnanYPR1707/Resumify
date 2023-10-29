"use client";
import React, { useState } from "react";
import InputControl from "../InputControl/InputControl";

const Editor = (props) => {
  const sections = props.sections;

  const variants = {
    mainContainer: "h-screen p-10 border border-black",
    innerContainer: "p-5 border border-Green",
    header: "",
    sections: "text-xl font-bold",
    detail: "",
    row: "",
    column: "",
    test: "border-2 border-blue-500",
  };

  const workExpBody = (
    <div className={variants.detail}>
      <div className={variants.row}>
        <InputControl
          label="Title"
          placeholder="Enter title eg. FrontEnd Developer"
        />
        <InputControl
          label="Company Name"
          placeholder="Enter Company Name eg. Google"
        />
      </div>
      <div className={variants.row}>
        <InputControl
          label="Certificate Link"
          placeholder="Enter Certificate Link"
        />
        <InputControl
          label="Location"
          placeholder="Enter Location eg. Remote"
        />
      </div>
      <div className={variants.row}>
        <InputControl
          label="Start Date"
          type="date"
          placeholder="Enter start date of work"
        />
        <InputControl
          label="End Date"
          type="date"
          placeholder="Enter end date of work"
        />
      </div>
      <div className={variants.column}>
        <label>Enter work descripton</label>
        <InputControl placeholder="Line 1" />
        <InputControl placeholder="Line 2" />
        <InputControl placeholder="Line 3" />
      </div>
    </div>
  );

  const projectBody = (
    <div className={variants.detail}>
      <div className={variants.row}>
        <InputControl
          lable="Title"
          placeholder="Enter title eg. Amazon Clone"
        />
      </div>
      <InputControl
        lable="Overview"
        placeholder="Enter basic overview of project"
      />
      <div className={variants.row}>
        <InputControl
          lable="Deployed Link"
          placeholder="Enter deployed link of project"
        />
        <InputControl
          lable="Github Link"
          placeholder="Enter github link of project"
        />
      </div>
      <div className={variants.column}>
        <label>Enter poject descripton</label>
        <InputControl placeholder="Line 1" />
        <InputControl placeholder="Line 2" />
        <InputControl placeholder="Line 3" />
        <InputControl placeholder="Line 4" />
      </div>
    </div>
  );

  const educationBody = (
    <div className={variants.detail}>
      <div className={variants.row}>
        <InputControl lable="Title" placeholder="Enter title eg. B-Tech" />
      </div>
      <InputControl
        lable="College/School Name"
        placeholder="Enter name of your college/school"
      />
      <div className={variants.row}>
        <InputControl
          label="Start Date"
          type="date"
          placeholder="Enter start date of work"
        />
        <InputControl
          label="End Date"
          type="date"
          placeholder="Enter end date of work"
        />
      </div>
    </div>
  );

  const basicInfoBody = (
    <div className={variants.detail}>
      <div className={variants.row}>
        <InputControl
          label="Name"
          placeholder="Enter your Full Name eg. John Kenny"
        />
        <InputControl
          label="Title"
          placeholder="Enter your title eg. Frontend Developer"
        />
      </div>
      <div className={variants.row}>
        <InputControl
          label="LinkedIn Link"
          placeholder="Enter your linkedin profile link"
        />
        <InputControl
          label="Github Link"
          placeholder="Enter your GitHub profile link"
        />
      </div>
      <div className={variants.row}>
        <InputControl label="Email" placeholder="Enter your Email" />
        <InputControl
          label="Phone Number"
          placeholder="Enter your Phone Number"
        />
      </div>
    </div>
  );

  const achievementBody = (
    <div className={variants.detail}>
      <div className={variants.column}>
        <label>List you Achievements</label>
        <InputControl placeholder=" Line 1" />
        <InputControl placeholder="Line 2" />
        <InputControl placeholder="Line 3" />
        <InputControl placeholder="Line 4" />
      </div>
    </div>
  );

  const summaryBody = (
    <div className={variants.detail}>
      <InputControl
        label="Summary"
        placeholder="Enter your objective/summary"
      />
    </div>
  );

  const otherBody = (
    <div className={variants.detail}>
      <InputControl label="Other" placeholder="Enter something" />
    </div>
  );

  const generateBody = (compVal) => {
    switch (compVal) {
      case sections.basicInfo:
        return basicInfoBody;
      case sections.workExp:
        return workExpBody;
      case sections.project:
        return projectBody;
      case sections.education:
        return educationBody;
      case sections.achievement:
        return achievementBody;
      case sections.summary:
        return summaryBody;
      case sections.other:
        return summaryBody;
      default:
        return null;
    }
  };

  return (
    // Main Container
    <main className={variants.mainContainer}>
      {/* Inner Container  */}
      <div className={variants.innerContainer}>
        {/* <div className={variants.header}>
          {Object.keys(sections).map((key) => (
            <div className={variants.sections}>{sections[key]}</div>
          ))}

          {generateBody(sections.basicInfo)}
        </div> */}
        <div className={variants.header}>
          {Object.keys(sections).map((key) => (
            <>
              <div className={variants.sections}>{sections[key]}</div>
              <>{generateBody(sections[key])}</>
            </>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Editor;
