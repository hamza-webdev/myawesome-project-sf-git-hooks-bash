module.exports = {
    extends: ['@commitlint/config-conventional'],
    rules: {
        'body-leading-blank': [1, 'always'],
        'body-max-line-length': [2, 'always', 100],
        'footer-leading-blank': [1, 'always'],
        'footer-max-line-length': [2, 'always', 100],
        'header-max-length': [2, 'always', 100],
        'subject-case': [
            2,
            'never', ['sentence-case', 'start-case', 'pascal-case', 'upper-case'],
        ],
        'subject-empty': [2, 'never'],
        'subject-full-stop': [2, 'never', '.'],
        'type-case': [2, 'always', 'lower-case'],
        'type-empty': [2, 'never'],
        'type-enum': [
            2,
            'always', [
                'build',
                'chore',
                'ci',
                'docs',
                'feat',
                'fix',
                'perf',
                'refactor',
                'revert',
                'style',
                'test',
            ],
        ],
    },
    prompt: {
        messages: {
            skip: '🤪 skip',
            max: '👍🏻 pas plus de %d caractères',
            min: 'au moins %d caractères',
            emptyWarning: 'ne peut être vide',
            upperLimitWarning: 'au-dessus de la limite',
            lowerLimitWarning: 'sous la limite'
        },
        questions: {
            type: {
                description: "🧐 Choisissez le type de modification que concerne votre commit :",
                enum: {
                    feat: {
                        description: 'Ajout/mise à jour de fonctionnalité',
                        title: 'Features',
                        emoji: '✨',
                    },
                    fix: {
                        description: 'Correction de bug',
                        title: 'Bug Fixes',
                        emoji: '🐛',
                    },
                    docs: {
                        description: 'Ajout/modif. de documentation',
                        title: 'Documentation',
                        emoji: '📚',
                    },
                    style: {
                        description: 'Modifs de style et de mise en forme du code (espacements, virgules, etc.)',
                        title: 'Styles',
                        emoji: '💎',
                    },
                    refactor: {
                        description: 'Modif. des sources n’étant ni un correctif, ni un ajout de fonctionnalité',
                        title: 'Code Refactoring',
                        emoji: '📦',
                    },
                    perf: {
                        description: 'Amélioration de la performance',
                        title: 'Performance Improvements',
                        emoji: '🚀',
                    },
                    test: {
                        description: 'Ajout ou correction de tests',
                        title: 'Tests',
                        emoji: '🚨',
                    },
                    build: {
                        description: 'Modif. affectant le "build" ou les dépendances externes (exemples de contextes :  webpack, broccoli, npm)',
                        title: 'Builds',
                        emoji: '🛠',
                    },
                    ci: {
                        description: 'Modif. de la configuration ou des scripts liés à la CI (Travis, Circle, BrowserStack, SauceLabs, etc.)',
                        title: 'Continuous Integrations',
                        emoji: '⚙️',
                    },
                    chore: {
                        description: "Autres mises à jour ne modifiant ni les sources, ni les tests",
                        title: 'Chores',
                        emoji: '♻️',
                    },
                    revert: {
                        description: 'Annuler (revert) un commit précédent',
                        title: 'Revert',
                        emoji: '🗑',
                    },
                },
            },
            scope: {
                description: '🤔 Quel est le contexte des modifications (composant, nom de fichier)',
            },
            subject: {
                description: '😕 Écrivez une description concise, à l’impératif',
            },
            body: {
                description: '😤 Renseignez une description plus détaillée des modifications',
            },
            isBreaking: {
                description: '🧐 Y a-il des changements majeurs ("breaking changes") ?',
            },
            breakingBody: {
                description: 'Un commit cassant la compatibilité ascendante ("breaking changes") nécessite un corps de message. Veuillez renseigner une description plus longue et détaillée que la première ligne du commit.',
            },
            breaking: {
                description: 'Décrivez les "breaking changes"',
            },
            isIssueAffected: {
                description: 'Cela concerne-t-il un ticket existant ?',
            },
            issuesBody: {
                description: 'Vous devez ajouter un corps au message si ce commit ferme des tickets. Essayez de renseigner une description plus longue et détaillée que la première ligne du commit.',
            },
            issues: {
                description: '🥳 Ajoutez une référence de ticket ("fix #123", "ref #123")',
            },
        },
    }

};