export const formSerializer = ({
  referenceType,
  referenceName,
  referenceSurname,
  referencePhone,
  referenceCompany,
  referenceRole,
  languageName,
  spokenLevel,
  readLevel,
  writtenLevel,
  role,
  company,
  workField,
  positionLevel,
  peopleInCharge,
  task,
  salary,
  startWorkDate,
  currentlyWorking,
  endWorkDate,
  skills,
  levelOfStudy,
  title,
  institute,
  fieldOfStudy,
  studySitutation,
  startStudyDate,
  currentlyStudying,
  endStudyDate,
  liveAbroad,
  countyPD,
  cityPD,
  currentCity,
  currentCountry,
  studies = [],
  references = [],
  languages = [],
  workExperiences = [],
  ...rest
}) => {
  if (referenceName && referenceSurname && referencePhone) {
    references.push({
      referenceType,
      referenceName,
      referenceSurname,
      referencePhone,
      referenceCompany,
      referenceRole,
    });
  }
  if (languageName) {
    readLevel ? readLevel : (readLevel = 0);
    spokenLevel ? spokenLevel : (spokenLevel = 0);
    writtenLevel ? writtenLevel : (writtenLevel = 0);
    languages.push({
      languageName,
      spokenLevel,
      readLevel,
      writtenLevel,
    });
  }
  if (company) {
    workExperiences.push({
      role,
      company,
      workField,
      positionLevel,
      peopleInCharge,
      task,
      salary,
      startWorkDate,
      currentlyWorking,
      endWorkDate,
      skills,
    });
  }
  if (title) {
    studies.push({
      levelOfStudy,
      title,
      institute,
      studySitutation,
      fieldOfStudy,
      startStudyDate,
      currentlyStudying,
      endStudyDate,
    });
  }
  if (liveAbroad) {
    (cityPD = currentCity), (countyPD = currentCountry);
  }
  return {
    ...rest,
    references,
    studies,
    workExperiences,
    cityPD,
    countyPD,
    languages,
  };
};
