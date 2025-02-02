/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */

import { i18n } from '@kbn/i18n';

export const RISK_SCORE = i18n.translate(
  'xpack.securitySolution.alerts.riskScoreMapping.riskScoreTitle',
  {
    defaultMessage: 'Risk score',
  }
);

export const DEFAULT_RISK_SCORE = i18n.translate(
  'xpack.securitySolution.alerts.riskScoreMapping.defaultRiskScoreTitle',
  {
    defaultMessage: 'Default risk score',
  }
);

export const RISK_SCORE_FIELD = i18n.translate(
  'xpack.securitySolution.alerts.riskScoreMapping.riskScoreFieldTitle',
  {
    defaultMessage: 'kibana.alert.rule.risk_score',
  }
);

export const SOURCE_FIELD = i18n.translate(
  'xpack.securitySolution.alerts.riskScoreMapping.sourceFieldTitle',
  {
    defaultMessage: 'Source field',
  }
);

export const RISK_SCORE_MAPPING = i18n.translate(
  'xpack.securitySolution.alerts.riskScoreMapping.riskScoreMappingTitle',
  {
    defaultMessage: 'Risk score override',
  }
);

export const RISK_SCORE_DESCRIPTION = i18n.translate(
  'xpack.securitySolution.alerts.riskScoreMapping.defaultDescriptionLabel',
  {
    defaultMessage: 'Select a risk score for all alerts generated by this rule.',
  }
);

export const RISK_SCORE_MAPPING_DESCRIPTION = i18n.translate(
  'xpack.securitySolution.alerts.riskScoreMapping.mappingDescriptionLabel',
  {
    defaultMessage: 'Use a source event value to override the default risk score.',
  }
);

export const RISK_SCORE_MAPPING_DETAILS = i18n.translate(
  'xpack.securitySolution.alerts.riskScoreMapping.mappingDetailsLabel',
  {
    defaultMessage:
      'If value is out of bounds, or field is not present, the default risk score will be used.',
  }
);
