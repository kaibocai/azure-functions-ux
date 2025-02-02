import { WebAppStack } from '../../models/WebAppStackModel';

const python2EOL = new Date(2020, 1, 1).toString();

export const pythonStack: WebAppStack = {
  displayText: 'Python',
  value: 'python',
  preferredOs: 'linux',
  majorVersions: [
    {
      displayText: 'Python 3',
      value: '3',
      minorVersions: [
        {
          displayText: 'Python 3.9',
          value: '3.9',
          stackSettings: {
            linuxRuntimeSettings: {
              runtimeVersion: 'PYTHON|3.9',
              remoteDebuggingSupported: false,
              appInsightsSettings: {
                isSupported: false,
              },
              gitHubActionSettings: {
                isSupported: true,
                supportedVersion: '3.9',
              },
              isHidden: false,
            },
          },
        },
        {
          displayText: 'Python 3.8',
          value: '3.8',
          stackSettings: {
            linuxRuntimeSettings: {
              runtimeVersion: 'PYTHON|3.8',
              remoteDebuggingSupported: false,
              appInsightsSettings: {
                isSupported: false,
              },
              gitHubActionSettings: {
                isSupported: true,
                supportedVersion: '3.8',
              },
            },
          },
        },
        {
          displayText: 'Python 3.7',
          value: '3.7',
          stackSettings: {
            linuxRuntimeSettings: {
              runtimeVersion: 'PYTHON|3.7',
              remoteDebuggingSupported: false,
              appInsightsSettings: {
                isSupported: false,
              },
              gitHubActionSettings: {
                isSupported: true,
                supportedVersion: '3.7',
              },
            },
          },
        },
        {
          displayText: 'Python 3.6',
          value: '3.6',
          stackSettings: {
            linuxRuntimeSettings: {
              runtimeVersion: 'PYTHON|3.6',
              isDeprecated: true,
              remoteDebuggingSupported: false,
              appInsightsSettings: {
                isSupported: false,
              },
              gitHubActionSettings: {
                isSupported: true,
                supportedVersion: '3.6',
              },
            },
            windowsRuntimeSettings: {
              runtimeVersion: '3.4.0',
              isDeprecated: true,
              remoteDebuggingSupported: false,
              appInsightsSettings: {
                isSupported: true,
              },
              gitHubActionSettings: {
                isSupported: true,
                supportedVersion: '3.6',
              },
            },
          },
        },
      ],
    },
    {
      displayText: 'Python 2',
      value: '2',
      minorVersions: [
        {
          displayText: 'Python 2.7',
          value: '2.7',
          stackSettings: {
            linuxRuntimeSettings: {
              runtimeVersion: 'PYTHON|2.7',
              isDeprecated: true,
              remoteDebuggingSupported: false,
              appInsightsSettings: {
                isSupported: false,
              },
              gitHubActionSettings: {
                isSupported: true,
                supportedVersion: '2.7',
              },
              endOfLifeDate: python2EOL,
            },
            windowsRuntimeSettings: {
              runtimeVersion: '2.7.3',
              isDeprecated: true,
              remoteDebuggingSupported: false,
              appInsightsSettings: {
                isSupported: false,
              },
              gitHubActionSettings: {
                isSupported: true,
                supportedVersion: '2.7',
              },
              endOfLifeDate: python2EOL,
            },
          },
        },
      ],
    },
  ],
};
