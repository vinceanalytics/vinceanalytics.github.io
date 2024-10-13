We provide helm charts for painless k8s deployments

```
❯ helm repo add vince http://vinceanalytics.com/charts
"vince" has been added to your repositories
```

`vince` helm charts will be available and ready to install

```
❯ helm repo list
NAME    URL                             
vince   http://vinceanalytics.com/charts
```

```
❯ helm install vince vince/vince
```


verify vince deployment

```
❯ kubectl get deployments
NAME    READY   UP-TO-DATE   AVAILABLE   AGE
vince   1/1     1            1           99s
```

vince container uses very little resources. 

```
❯ kubectl top pods
NAME                     CPU(cores)   MEMORY(bytes)   
vince-8577ddd56f-cwb6w   4m           54Mi      
```
