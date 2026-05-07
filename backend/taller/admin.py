from django.contrib import admin
from django.apps import apps

# Obtenemos todos los modelos (tablas) de la aplicación actual ('taller')
app_models = apps.get_app_config('taller').get_models()

# Le decimos a Django que los registre todos en el panel
for model in app_models:
    try:
        admin.site.register(model)
    except admin.sites.AlreadyRegistered:
        pass