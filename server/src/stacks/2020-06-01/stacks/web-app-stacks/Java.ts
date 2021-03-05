import { WebAppStack } from '../../models/WebAppStackModel';

// EOL source: https://docs.microsoft.com/en-us/java/azure/jdk/?view=azure-java-stable#supported-java-versions-and-update-schedule
const java11EOL = new Date(2026, 9).toString();
const java8EOL = new Date(2025, 3).toString();
const java7EOL = new Date(2023, 7).toString();

export const javaStack: WebAppStack = {
  displayText: 'Java',
  value: 'java',
  preferredOs: 'linux',
  majorVersions: [
    {
      displayText: 'Java 11',
      value: '11',
      minorVersions: [
        {
          displayText: 'Java 11',
          value: '11.0',
          stackSettings: {
            linuxRuntimeSettings: {
              // Note (allisonm): Runtime on Linux Java is determined by the Java container
              runtimeVersion: '',
              isAutoUpdate: true,
              remoteDebuggingSupported: false,
              appInsightsSettings: {
                isSupported: false,
              },
              gitHubActionSettings: {
                isSupported: true,
                supportedVersion: '11',
              },
              endOfLifeDate: java11EOL,
            },
            windowsRuntimeSettings: {
              runtimeVersion: '11',
              isAutoUpdate: true,
              remoteDebuggingSupported: false,
              appInsightsSettings: {
                isSupported: false,
              },
              gitHubActionSettings: {
                isSupported: true,
                supportedVersion: '11',
              },
              endOfLifeDate: java11EOL,
            },
          },
        },
        {
          displayText: 'Java 11.0.9',
          value: '11.0.9',
          stackSettings: {
            linuxRuntimeSettings: {
              // Note (allisonm): Runtime on Linux Java is determined by the Java container
              runtimeVersion: '',
              remoteDebuggingSupported: false,
              appInsightsSettings: {
                isSupported: false,
              },
              gitHubActionSettings: {
                isSupported: true,
                supportedVersion: '11',
              },
              endOfLifeDate: java11EOL,
            },
          },
        },
        {
          displayText: 'Java 11.0.8',
          value: '11.0.8',
          stackSettings: {
            windowsRuntimeSettings: {
              runtimeVersion: '11.0.8',
              remoteDebuggingSupported: false,
              appInsightsSettings: {
                isSupported: false,
              },
              gitHubActionSettings: {
                isSupported: true,
                supportedVersion: '11',
              },
              endOfLifeDate: java11EOL,
            },
          },
        },
        {
          displayText: 'Java 11.0.7',
          value: '11.0.7',
          stackSettings: {
            linuxRuntimeSettings: {
              // Note (allisonm): Runtime on Linux Java is determined by the Java container
              runtimeVersion: '',
              remoteDebuggingSupported: false,
              appInsightsSettings: {
                isSupported: false,
              },
              gitHubActionSettings: {
                isSupported: true,
                supportedVersion: '11',
              },
              endOfLifeDate: java11EOL,
            },
            windowsRuntimeSettings: {
              // Note (allisonm): ZULU suffix was removed after Java 11.0.5
              runtimeVersion: '11.0.7',
              remoteDebuggingSupported: false,
              appInsightsSettings: {
                isSupported: false,
              },
              gitHubActionSettings: {
                isSupported: true,
                supportedVersion: '11',
              },
              endOfLifeDate: java11EOL,
            },
          },
        },
        {
          displayText: 'Java 11.0.6',
          value: '11.0.6',
          stackSettings: {
            linuxRuntimeSettings: {
              // Note (allisonm): Runtime on Linux Java is determined by the Java container
              runtimeVersion: '',
              remoteDebuggingSupported: false,
              appInsightsSettings: {
                isSupported: false,
              },
              gitHubActionSettings: {
                isSupported: true,
                supportedVersion: '11',
              },
              endOfLifeDate: java11EOL,
            },
            windowsRuntimeSettings: {
              // Note (allisonm): ZULU suffix was removed after Java 11.0.5
              runtimeVersion: '11.0.6',
              remoteDebuggingSupported: false,
              appInsightsSettings: {
                isSupported: false,
              },
              gitHubActionSettings: {
                isSupported: true,
                supportedVersion: '11',
              },
              endOfLifeDate: java11EOL,
            },
          },
        },
        {
          displayText: 'Java 11.0.5',
          value: '11.0.5',
          stackSettings: {
            linuxRuntimeSettings: {
              // Note (allisonm): Runtime on Linux Java is determined by the Java container
              runtimeVersion: '',
              remoteDebuggingSupported: false,
              appInsightsSettings: {
                isSupported: false,
              },
              gitHubActionSettings: {
                isSupported: true,
                supportedVersion: '11',
              },
              endOfLifeDate: java11EOL,
            },
            windowsRuntimeSettings: {
              runtimeVersion: '11.0.5_ZULU',
              remoteDebuggingSupported: false,
              appInsightsSettings: {
                isSupported: false,
              },
              gitHubActionSettings: {
                isSupported: true,
                supportedVersion: '11',
              },
              endOfLifeDate: java11EOL,
            },
          },
        },
        {
          displayText: 'Java 11.0.3',
          value: '11.0.3',
          stackSettings: {
            windowsRuntimeSettings: {
              runtimeVersion: '11.0.3_ZULU',
              remoteDebuggingSupported: false,
              appInsightsSettings: {
                isSupported: false,
              },
              gitHubActionSettings: {
                isSupported: true,
                supportedVersion: '11',
              },
              endOfLifeDate: java11EOL,
            },
          },
        },
        {
          displayText: 'Java 11.0.2',
          value: '11.0.2',
          stackSettings: {
            windowsRuntimeSettings: {
              runtimeVersion: '11.0.2_ZULU',
              remoteDebuggingSupported: false,
              appInsightsSettings: {
                isSupported: false,
              },
              gitHubActionSettings: {
                isSupported: true,
                supportedVersion: '11',
              },
              endOfLifeDate: java11EOL,
            },
          },
        },
      ],
    },
    {
      displayText: 'Java 8',
      value: '8',
      minorVersions: [
        {
          displayText: 'Java 8',
          value: '8.0',
          stackSettings: {
            linuxRuntimeSettings: {
              // Note (allisonm): Runtime on Linux Java is determined by the Java container
              runtimeVersion: '',
              isAutoUpdate: true,
              remoteDebuggingSupported: false,
              appInsightsSettings: {
                isSupported: false,
              },
              gitHubActionSettings: {
                isSupported: true,
                supportedVersion: '8',
              },
              endOfLifeDate: java8EOL,
            },
            windowsRuntimeSettings: {
              runtimeVersion: '1.8',
              isAutoUpdate: true,
              remoteDebuggingSupported: false,
              appInsightsSettings: {
                isSupported: false,
              },
              gitHubActionSettings: {
                isSupported: true,
                supportedVersion: '8',
              },
              endOfLifeDate: java8EOL,
            },
          },
        },
        {
          displayText: 'Java 1.8.0_265',
          value: '8.0.265',
          stackSettings: {
            windowsRuntimeSettings: {
              runtimeVersion: '1.8.0_265',
              remoteDebuggingSupported: false,
              appInsightsSettings: {
                isSupported: false,
              },
              gitHubActionSettings: {
                isSupported: true,
                supportedVersion: '8',
              },
              endOfLifeDate: java8EOL,
            },
          },
        },
        {
          displayText: 'Java 1.8.0_252',
          value: '8.0.252',
          stackSettings: {
            linuxRuntimeSettings: {
              // Note (allisonm): Runtime on Linux Java is determined by the Java container
              runtimeVersion: '',
              remoteDebuggingSupported: false,
              appInsightsSettings: {
                isSupported: false,
              },
              gitHubActionSettings: {
                isSupported: true,
                supportedVersion: '8',
              },
              endOfLifeDate: java8EOL,
            },
            windowsRuntimeSettings: {
              runtimeVersion: '1.8.0_252',
              remoteDebuggingSupported: false,
              appInsightsSettings: {
                isSupported: false,
              },
              gitHubActionSettings: {
                isSupported: true,
                supportedVersion: '8',
              },
              endOfLifeDate: java8EOL,
            },
          },
        },
        {
          displayText: 'Java 1.8.0_242',
          value: '8.0.242',
          stackSettings: {
            linuxRuntimeSettings: {
              // Note (allisonm): Runtime on Linux Java is determined by the Java container
              runtimeVersion: '',
              remoteDebuggingSupported: false,
              appInsightsSettings: {
                isSupported: false,
              },
              gitHubActionSettings: {
                isSupported: true,
                supportedVersion: '8',
              },
              endOfLifeDate: java8EOL,
            },
            windowsRuntimeSettings: {
              runtimeVersion: '1.8.0_242',
              remoteDebuggingSupported: false,
              appInsightsSettings: {
                isSupported: false,
              },
              gitHubActionSettings: {
                isSupported: true,
                supportedVersion: '8',
              },
              endOfLifeDate: java8EOL,
            },
          },
        },
        {
          displayText: 'Java 1.8.0_232',
          value: '8.0.232',
          stackSettings: {
            linuxRuntimeSettings: {
              // Note (allisonm): Runtime on Linux Java is determined by the Java container
              runtimeVersion: '',
              remoteDebuggingSupported: false,
              appInsightsSettings: {
                isSupported: false,
              },
              gitHubActionSettings: {
                isSupported: true,
                supportedVersion: '8',
              },
              endOfLifeDate: java8EOL,
            },
            windowsRuntimeSettings: {
              runtimeVersion: '1.8.0_232_ZULU',
              remoteDebuggingSupported: false,
              appInsightsSettings: {
                isSupported: false,
              },
              gitHubActionSettings: {
                isSupported: true,
                supportedVersion: '8',
              },
              endOfLifeDate: java8EOL,
            },
          },
        },
        {
          displayText: 'Java 1.8.0_212',
          value: '8.0.212',
          stackSettings: {
            windowsRuntimeSettings: {
              runtimeVersion: '1.8.0_212_ZULU',
              remoteDebuggingSupported: false,
              appInsightsSettings: {
                isSupported: false,
              },
              gitHubActionSettings: {
                isSupported: true,
                supportedVersion: '8',
              },
              endOfLifeDate: java8EOL,
            },
          },
        },
        {
          displayText: 'Java 1.8.0_202',
          value: '8.0.202',
          stackSettings: {
            windowsRuntimeSettings: {
              runtimeVersion: '1.8.0_202_ZULU',
              remoteDebuggingSupported: false,
              appInsightsSettings: {
                isSupported: false,
              },
              gitHubActionSettings: {
                isSupported: true,
                supportedVersion: '8',
              },
              endOfLifeDate: java8EOL,
            },
          },
        },
        {
          displayText: 'Java 1.8.0_202 (Oracle)',
          value: '8.0.202 (Oracle)',
          stackSettings: {
            windowsRuntimeSettings: {
              runtimeVersion: '1.8.0_202',
              isDeprecated: true,
              remoteDebuggingSupported: false,
              appInsightsSettings: {
                isSupported: false,
              },
              gitHubActionSettings: {
                isSupported: true,
                supportedVersion: '8',
              },
            },
          },
        },
        {
          displayText: 'Java 1.8.0_181',
          value: '8.0.181',
          stackSettings: {
            windowsRuntimeSettings: {
              runtimeVersion: '1.8.0_181_ZULU',
              remoteDebuggingSupported: false,
              appInsightsSettings: {
                isSupported: false,
              },
              gitHubActionSettings: {
                isSupported: true,
                supportedVersion: '8',
              },
              endOfLifeDate: java8EOL,
            },
          },
        },
        {
          displayText: 'Java 1.8.0_181 (Oracle)',
          value: '8.0.181 (Oracle)',
          stackSettings: {
            windowsRuntimeSettings: {
              runtimeVersion: '1.8.0_181',
              isDeprecated: true,
              remoteDebuggingSupported: false,
              appInsightsSettings: {
                isSupported: false,
              },
              gitHubActionSettings: {
                isSupported: true,
                supportedVersion: '8',
              },
            },
          },
        },
        {
          displayText: 'Java 1.8.0_172',
          value: '8.0.172',
          stackSettings: {
            windowsRuntimeSettings: {
              runtimeVersion: '1.8.0_172_ZULU',
              remoteDebuggingSupported: false,
              appInsightsSettings: {
                isSupported: false,
              },
              gitHubActionSettings: {
                isSupported: true,
                supportedVersion: '8',
              },
              endOfLifeDate: java8EOL,
            },
          },
        },
        {
          displayText: 'Java 1.8.0_172 (Oracle)',
          value: '8.0.172 (Oracle)',
          stackSettings: {
            windowsRuntimeSettings: {
              runtimeVersion: '1.8.0_172',
              isDeprecated: true,
              remoteDebuggingSupported: false,
              appInsightsSettings: {
                isSupported: false,
              },
              gitHubActionSettings: {
                isSupported: true,
                supportedVersion: '8',
              },
            },
          },
        },
        {
          displayText: 'Java 1.8.0_144',
          value: '8.0.144',
          stackSettings: {
            windowsRuntimeSettings: {
              runtimeVersion: '1.8.0_144', // NOTE (allisonm): Azul 8 runtimes versions here and lower omit the suffix: _ZULU
              isDeprecated: true,
              remoteDebuggingSupported: false,
              appInsightsSettings: {
                isSupported: false,
              },
              gitHubActionSettings: {
                isSupported: true,
                supportedVersion: '8',
              },
              endOfLifeDate: java8EOL,
            },
          },
        },
        {
          displayText: 'Java 1.8.0_111 (Oracle)',
          value: '8.0.111 (Oracle)',
          stackSettings: {
            windowsRuntimeSettings: {
              runtimeVersion: '1.8.0_111',
              isDeprecated: true,
              remoteDebuggingSupported: false,
              appInsightsSettings: {
                isSupported: false,
              },
              gitHubActionSettings: {
                isSupported: true,
                supportedVersion: '8',
              },
            },
          },
        },
        {
          displayText: 'Java 1.8.0_102',
          value: '8.0.102',
          stackSettings: {
            windowsRuntimeSettings: {
              runtimeVersion: '1.8.0_102',
              isDeprecated: true,
              remoteDebuggingSupported: false,
              appInsightsSettings: {
                isSupported: false,
              },
              gitHubActionSettings: {
                isSupported: true,
                supportedVersion: '8',
              },
              endOfLifeDate: java8EOL,
            },
          },
        },
        {
          displayText: 'Java 1.8.0_92',
          value: '8.0.92',
          stackSettings: {
            windowsRuntimeSettings: {
              runtimeVersion: '1.8.0_92',
              isDeprecated: true,
              remoteDebuggingSupported: false,
              appInsightsSettings: {
                isSupported: false,
              },
              gitHubActionSettings: {
                isSupported: true,
                supportedVersion: '8',
              },
              endOfLifeDate: java8EOL,
            },
          },
        },
        {
          displayText: 'Java 1.8.0_73 (Oracle)',
          value: '8.0.73 (Oracle)',
          stackSettings: {
            windowsRuntimeSettings: {
              runtimeVersion: '1.8.0_73',
              isDeprecated: true,
              remoteDebuggingSupported: false,
              appInsightsSettings: {
                isSupported: false,
              },
              gitHubActionSettings: {
                isSupported: true,
                supportedVersion: '8',
              },
            },
          },
        },
        {
          displayText: 'Java 1.8.0_60 (Oracle)',
          value: '8.0.60 (Oracle)',
          stackSettings: {
            windowsRuntimeSettings: {
              runtimeVersion: '1.8.0_60',
              isDeprecated: true,
              remoteDebuggingSupported: false,
              appInsightsSettings: {
                isSupported: false,
              },
              gitHubActionSettings: {
                isSupported: true,
                supportedVersion: '8',
              },
            },
          },
        },
        {
          displayText: 'Java 1.8.0_25 (Oracle)',
          value: '8.0.25 (Oracle)',
          stackSettings: {
            windowsRuntimeSettings: {
              runtimeVersion: '1.8.0_25',
              isDeprecated: true,
              remoteDebuggingSupported: false,
              appInsightsSettings: {
                isSupported: false,
              },
              gitHubActionSettings: {
                isSupported: true,
                supportedVersion: '8',
              },
            },
          },
        },
      ],
    },
    {
      displayText: 'Java 7',
      value: '7',
      minorVersions: [
        {
          displayText: 'Java 7',
          value: '7.0',
          stackSettings: {
            windowsRuntimeSettings: {
              runtimeVersion: '1.7',
              isAutoUpdate: true,
              isDeprecated: false,
              remoteDebuggingSupported: false,
              appInsightsSettings: {
                isSupported: false,
              },
              gitHubActionSettings: {
                isSupported: false,
              },
              endOfLifeDate: java7EOL,
            },
          },
        },
        {
          displayText: 'Java 1.7.0_272',
          value: '7.0.272',
          stackSettings: {
            windowsRuntimeSettings: {
              runtimeVersion: '1.7.0_272_ZULU',
              isDeprecated: false,
              remoteDebuggingSupported: false,
              appInsightsSettings: {
                isSupported: false,
              },
              gitHubActionSettings: {
                isSupported: false,
              },
              endOfLifeDate: java7EOL,
            },
          },
        },
        {
          displayText: 'Java 1.7.0_262',
          value: '7.0.262',
          stackSettings: {
            windowsRuntimeSettings: {
              runtimeVersion: '1.7.0_262_ZULU',
              isDeprecated: false,
              remoteDebuggingSupported: false,
              appInsightsSettings: {
                isSupported: false,
              },
              gitHubActionSettings: {
                isSupported: false,
              },
              endOfLifeDate: java7EOL,
            },
          },
        },
        {
          displayText: 'Java 1.7.0_242',
          value: '7.0.242',
          stackSettings: {
            windowsRuntimeSettings: {
              runtimeVersion: '1.7.0_242_ZULU',
              isDeprecated: true,
              remoteDebuggingSupported: false,
              appInsightsSettings: {
                isSupported: false,
              },
              gitHubActionSettings: {
                isSupported: false,
              },
              endOfLifeDate: java7EOL,
            },
          },
        },
        {
          displayText: 'Java 1.7.0_222',
          value: '7.0.222',
          stackSettings: {
            windowsRuntimeSettings: {
              runtimeVersion: '1.7.0_222_ZULU',
              isDeprecated: true,
              remoteDebuggingSupported: false,
              appInsightsSettings: {
                isSupported: false,
              },
              gitHubActionSettings: {
                isSupported: false,
              },
              endOfLifeDate: java7EOL,
            },
          },
        },
        {
          displayText: 'Java 1.7.0_191',
          value: '7.0.191',
          stackSettings: {
            windowsRuntimeSettings: {
              runtimeVersion: '1.7.0_191_ZULU',
              isDeprecated: true,
              remoteDebuggingSupported: false,
              appInsightsSettings: {
                isSupported: false,
              },
              gitHubActionSettings: {
                isSupported: false,
              },
              endOfLifeDate: java7EOL,
            },
          },
        },
        {
          displayText: 'Java 1.7.0_80 (Oracle)',
          value: '7.0.80 (Oracle)',
          stackSettings: {
            windowsRuntimeSettings: {
              runtimeVersion: '1.7.0_80',
              isDeprecated: true,
              remoteDebuggingSupported: false,
              appInsightsSettings: {
                isSupported: false,
              },
              gitHubActionSettings: {
                isSupported: false,
              },
            },
          },
        },
        {
          displayText: 'Java 1.7.0_71 (Oracle)',
          value: '7.0.71 (Oracle)',
          stackSettings: {
            windowsRuntimeSettings: {
              runtimeVersion: '1.7.0_71',
              isDeprecated: true,
              remoteDebuggingSupported: false,
              appInsightsSettings: {
                isSupported: false,
              },
              gitHubActionSettings: {
                isSupported: false,
              },
            },
          },
        },
        {
          displayText: 'Java 1.7.0_51 (Oracle)',
          value: '7.0.51 (Oracle)',
          stackSettings: {
            windowsRuntimeSettings: {
              runtimeVersion: '1.7.0_51',
              isDeprecated: true,
              remoteDebuggingSupported: false,
              appInsightsSettings: {
                isSupported: false,
              },
              gitHubActionSettings: {
                isSupported: false,
              },
            },
          },
        },
      ],
    },
  ],
};