/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */

import React from 'react';

import { EuiSpacer, EuiTitle, EuiText, EuiButton } from '@elastic/eui';
import { i18n } from '@kbn/i18n';
import { FormattedMessage } from '@kbn/i18n-react';

import { WORKPLACE_SEARCH_PLUGIN } from '../../../../../common/constants';
import { SetWorkplaceSearchChrome as SetPageChrome } from '../../../shared/kibana_chrome';
import { SetupGuideLayout, SETUP_GUIDE_TITLE } from '../../../shared/setup_guide';
import { SendWorkplaceSearchTelemetry as SendTelemetry } from '../../../shared/telemetry';
import {
  GETTING_STARTED_DOCS_URL,
  NATIVE_AUTH_DOCS_URL,
  STANDARD_AUTH_DOCS_URL,
} from '../../routes';

import GettingStarted from './assets/getting_started.png';

const GETTING_STARTED_LINK_URL = GETTING_STARTED_DOCS_URL;

export const SetupGuide: React.FC = () => {
  return (
    <SetupGuideLayout
      productName={WORKPLACE_SEARCH_PLUGIN.NAME}
      productEuiIcon="logoWorkplaceSearch"
      standardAuthLink={STANDARD_AUTH_DOCS_URL}
      elasticsearchNativeAuthLink={NATIVE_AUTH_DOCS_URL}
    >
      <SetPageChrome trail={[SETUP_GUIDE_TITLE]} />
      <SendTelemetry action="viewed" metric="setup_guide" />

      <img
        className="setupGuide__thumbnail"
        src={GettingStarted}
        alt={i18n.translate('xpack.enterpriseSearch.workplaceSearch.setupGuide.imageAlt', {
          defaultMessage:
            'Getting started with Workplace Search - a guide to show you how to get Workplace Search up and running',
        })}
        width="1280"
        height="720"
      />

      <EuiTitle size="s">
        <p>
          <FormattedMessage
            id="xpack.enterpriseSearch.workplaceSearch.setupGuide.description"
            defaultMessage="Unify your content platforms, such as Google Drive and Salesforce, into a personalized search experience."
          />
        </p>
      </EuiTitle>
      <EuiSpacer size="l" />
      <EuiButton target="_blank" fill href={GETTING_STARTED_LINK_URL} iconType="popout">
        <FormattedMessage
          id="xpack.enterpriseSearch.workplaceSearch.setupGuide.button"
          defaultMessage="Get started with Workplace Search"
        />
      </EuiButton>
      <EuiSpacer size="l" />
      <EuiText>
        <p>
          <FormattedMessage
            id="xpack.enterpriseSearch.workplaceSearch.setupGuide.notConfigured"
            defaultMessage="Workplace Search isn't configured in Kibana. Follow the instructions on this page."
          />
        </p>
      </EuiText>
    </SetupGuideLayout>
  );
};
