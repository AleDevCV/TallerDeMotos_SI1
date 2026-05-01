const utf8MojibakePairs = [
  ['\u00c2\u00a1', '\u00a1'],
  ['\u00c2\u00bf', '\u00bf'],
  ['\u00c3\u00a1', '\u00e1'],
  ['\u00c3\u00a9', '\u00e9'],
  ['\u00c3\u00ad', '\u00ed'],
  ['\u00c3\u00b3', '\u00f3'],
  ['\u00c3\u00ba', '\u00fa'],
  ['\u00c3\u00b1', '\u00f1'],
  ['\u00c3\u0081', '\u00c1'],
  ['\u00c3\u0089', '\u00c9'],
  ['\u00c3\u008d', '\u00cd'],
  ['\u00c3\u0093', '\u00d3'],
  ['\u00c3\u009a', '\u00da'],
  ['\u00c3\u0091', '\u00d1'],
];

const commonQuestionPatterns = [
  [/mec\?\?nico/gi, 'Mec\u00e1nico'],
  [/bit\?\?cora/gi, 'Bit\u00e1cora'],
  [/sesi\?\?n/gi, 'sesi\u00f3n'],
  [/cerr\?\?/gi, 'cerr\u00f3'],
  [/inici\?\?/gi, 'inici\u00f3'],
  [/gesti\?\?n/gi, 'gesti\u00f3n'],
  [/acci\?\?n/gi, 'acci\u00f3n'],
  [/auditor\?\?a/gi, 'auditor\u00eda'],
  [/descripci\?\?n/gi, 'descripci\u00f3n'],
  [/contrase\?\?a/gi, 'contrase\u00f1a'],
];

export const repairText = (value) => {
  let normalized = String(value ?? '');

  for (const [bad, good] of utf8MojibakePairs) {
    normalized = normalized.split(bad).join(good);
  }

  for (const [pattern, replacement] of commonQuestionPatterns) {
    normalized = normalized.replace(pattern, replacement);
  }

  return normalized;
};

export const normalizeRoleText = (roleValue) => {
  const base = repairText(roleValue)
    .normalize('NFKD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]/g, '');

  if (base === 'mecnico' || (base.startsWith('mec') && base.endsWith('nico'))) {
    return 'mecanico';
  }

  return base;
};

export const formatServerDateToLaPaz = (value) => {
  if (!value) return 'Sin fecha';

  const raw = String(value).trim();
  const hasTimezone = /([zZ]|[+\-]\d{2}:?\d{2})$/.test(raw);
  const iso = hasTimezone ? raw : `${raw}Z`;
  const parsed = new Date(iso);

  if (Number.isNaN(parsed.getTime())) {
    return repairText(raw);
  }

  return parsed.toLocaleString('es-BO', {
    timeZone: 'America/La_Paz',
  });
};
