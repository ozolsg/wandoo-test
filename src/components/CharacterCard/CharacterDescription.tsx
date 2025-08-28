import { Character } from '@/types/graphql';
import { capitalize } from 'lodash';

interface CharacterDescriptionProps {
  character: Character;
}

export function CharacterDescription({ character }: CharacterDescriptionProps) {
  const generateDescription = () => {
    const {
      name,
      height,
      mass,
      hairColor,
      eyeColor,
      skinColor,
      gender,
      birthYear,
    } = character;

    const nameStr = name || 'This character';

    const physicalTraits = [
      height && height !== 'n/a' && `${height}cm tall`,
      mass && mass !== 'n/a' && `${mass}kg`,
      hairColor &&
        hairColor !== 'n/a' &&
        hairColor !== 'none' &&
        `${hairColor} hair`,
      eyeColor &&
        eyeColor !== 'n/a' &&
        eyeColor !== 'none' &&
        `${eyeColor} eyes`,
      skinColor &&
        skinColor !== 'n/a' &&
        skinColor !== 'none' &&
        `${skinColor} skin`,
    ].filter(Boolean);

    const parts = [];

    if (physicalTraits.length > 0) {
      parts.push(`${nameStr} is ${physicalTraits.slice(0, 3).join(', ')}`);
    }

    const genderStr = gender && gender !== 'n/a' ? gender : null;
    const birthStr =
      birthYear && birthYear !== 'n/a' ? `born in ${birthYear}` : null;

    if (genderStr || birthStr) {
      if (genderStr && birthStr) {
        parts.push(`${capitalize(genderStr)}, ${birthStr}`);
      } else if (genderStr) {
        parts.push(capitalize(genderStr));
      } else if (birthStr) {
        parts.push(capitalize(birthStr));
      }
    }

    if (parts.length === 0) {
      return `${nameStr} is a character from the Star Wars universe.`;
    }

    let description = parts.join('. ');
    if (!description.endsWith('.')) description += '.';
    if (description.length > 300)
      description = description.substring(0, 297) + '...';

    return description;
  };

  return (
    <p className="text-gray-600 text-sm leading-relaxed">
      {generateDescription()}
    </p>
  );
}
