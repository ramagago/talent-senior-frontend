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
  level,
  title,
  institute,
  fieldOfStudy,
  studySitutation,
  startStudyDate,
  currentlyStudying,
  endStudyDate,
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
      level,
      title,
      institute,
      studySitutation,
      fieldOfStudy,
      startStudyDate,
      currentlyStudying,
      endStudyDate,
    });
  }
  return { ...rest, references, studies, workExperiences, languages };
};
