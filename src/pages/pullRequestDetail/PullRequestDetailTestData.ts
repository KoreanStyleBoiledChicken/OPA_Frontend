export const data = `{
    "deny": [
        {
            "alertMessage": "service account: john-dev has the following permissions in the cluster: test",
            "alertObject": {
                "externalObjects": {
                    "kind": "ServiceAccount",
                    "name": "john-dev",
                    "namespace": "default",
                    "relatedObjects": [
                        {
                            "apiVersion": "rbac.authorization.k8s.io/v1",
                            "kind": "Role",
                            "metadata": {
                                "name": "test",
                                "namespace": "default"
                            },
                            "rules": [
                                {
                                    "apiGroups": [
                                        "*"
                                    ],
                                    "resources": [
                                        "rolebindings"
                                    ],
                                    "verbs": [
                                        "*",
                                        "watch",
                                        "create",
                                        "update"
                                    ]
                                }
                            ]
                        },
                        {
                            "apiVersion": "rbac.authorization.k8s.io/v1",
                            "kind": "RoleBinding",
                            "metadata": {
                                "name": "pod",
                                "namespace": "default"
                            },
                            "roleRef": {
                                "apiGroup": "rbac.authorization.k8s.io",
                                "kind": "Role",
                                "name": "test"
                            },
                            "subjects": [
                                {
                                    "apiGroup": "rbac.authorization.k8s.io",
                                    "kind": "User",
                                    "name": "jane"
                                },
                                {
                                    "kind": "ServiceAccount",
                                    "name": "john-dev",
                                    "namespace": "default"
                                }
                            ]
                        }
                    ]
                },
                "k8sApiObjects": []
            },
            "alertScore": 7,
            "ruleId": "RBAC-001"
        }
    ]
}`