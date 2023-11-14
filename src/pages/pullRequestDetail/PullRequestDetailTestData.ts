export const data1 = `{"deny": [
    {
        "alertMessage": "Your're not allowed to create/update/delete the StorageClass 'ceph'",
        "ruleId": "RBAC-001",
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


export const data2 = `{
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
            "ruleId": "RBAC-002"
        }
    ]
}`

export const data3 = `
{
    "deny": [
        {
            "ruleId": "RBAC-003",
            "alertMessage": "Ingress host conflicts with Ingress ecommerce/foo",
            "alertObject": {
                "k8SApiObjects": [
                    {
                        "kind": "Ingress",
                        "metadata": {
                            "name": "prod",
                            "namespace": "ecommerce"
                        },
                        "spec": {
                            "rules": [
                                {
                                    "host": "initech.com",
                                    "http": {
                                        "paths": [
                                            {
                                                "backend": {
                                                    "serviceName": "banking",
                                                    "servicePort": 443
                                                },
                                                "path": "/finance"
                                            }
                                        ]
                                    }
                                }
                            ]
                        }
                    },
                    {
                        "kind": "Ingress",
                        "metadata": {
                            "name": "foo",
                            "namespace": "ecommerce"
                        },
                        "spec": {
                            "rules": [
                                {
                                    "host": "initech.com",
                                    "http": {
                                        "paths": [
                                            {
                                                "backend": {
                                                    "serviceName": "banking",
                                                    "servicePort": 443
                                                },
                                                "path": "/finance"
                                            }
                                        ]
                                    }
                                }
                            ]
                        }
                    }
                ]
            }
        }
    ],
    "input_name": "prod",
    "input_ns": "ecommerce",
    "is_ingress": true
}
`


export const data4 = `
{
    "deny": [
        {
            "ruleId": "RBAC-004",
            "alertMessage": "Image 'mysql' comes from untrusted registry",
            "alertObject": {
                "k8SApiObjects": [
                    {
                        "kind": "Pod",
                        "metadata": {
                            "name": "myapp"
                        },
                        "spec": {
                            "containers": [
                                {
                                    "image": "hooli.com/nginx",
                                    "name": "nginx-frontend"
                                },
                                {
                                    "image": "mysql",
                                    "name": "mysql-backend"
                                }
                            ]
                        }
                    }
                ]
            }
        }
    ]
}
`