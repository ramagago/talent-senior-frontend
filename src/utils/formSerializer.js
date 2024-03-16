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
  return { ...rest, references };
};
